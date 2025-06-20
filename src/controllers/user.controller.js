import {asynchandler} from "../utils/asynchandler.js";



const registeUser= asynchandler( async(req,res)=>{
    res.status(200).json(
        {
            message:"ok"
        }
    );
} )

export {registeUser}