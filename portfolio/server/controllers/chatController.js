import { generateResponse } from "../services/aiService.js";


export const chatWithAI = async(req,res)=>{


try{


const { conversation } = req.body;



if(
!conversation ||
!Array.isArray(conversation)
){


return res.status(400).json({

success:false,

message:
"Conversation array is required.",

});


}





const reply =
await generateResponse(conversation);




res.status(200).json({

success:true,

reply,

});




}

catch(error){


console.error(
"Chat Controller Error:",
error
);



res.status(500).json({

success:false,

message:
"Something went wrong while generating response.",

});


}


};