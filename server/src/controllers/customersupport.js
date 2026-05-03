const DeveloperSuggestion = require('../modal/support')
export const customerSupport = async(req,res) =>{
    try {
        const {developerName,email,suggestionCategory,suggestionDetails} = req.body;

        if(!developerName || !email || !suggestionCategory || !suggestionDetails){
            return res.status(401).json({isSuccess:false,message:"All Filed is required."})
        }

        
        
    } catch (error) {
        
    }
}