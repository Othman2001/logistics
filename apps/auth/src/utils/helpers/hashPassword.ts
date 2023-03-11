import bcrypt from 'bcrypt';

async function hashPassword(plaintextPassword) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}

export default hashPassword;
