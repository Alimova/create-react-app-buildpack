/**
 * Created by alimov on 4/15/17.
 */
import bcrypt from 'bcrypt-nodejs';

export const encryptedPassword = (password) => bcrypt.hashSync(password);
