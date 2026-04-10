

// create user code -> schoolCode-role-seqCode

const ROLE_CODES = require("../constants/role_code");
const Counter = require("../models/counter.model");

async function generateUserCode(role , schoolCode,schoolId,session){

         try {

            const roleCode = ROLE_CODES[role];

            console.log(roleCode);

            const counter = await Counter.findOneAndUpdate({
                schoolId:schoolId,
                role:role
            },
            {
                $inc:{seq:1}
            },
            {
                returnDocument: 'after',   // instead of ->new:true
                upsert:true,
                session

            }
        );

        const seq = String(counter.seq).padStart(4,"0");
            

             const userCode = `${schoolCode}-${roleCode}-${seq}`;
             return userCode;

         } catch (error) {
            console.log(`Error from generate code -->${error}`);
            return;
            throw error;
         }

    }

    module.exports = generateUserCode;


