const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data) return res.status(401).json({ error: 'Invalid token' });

  req.user = data.user;
  next();
};
