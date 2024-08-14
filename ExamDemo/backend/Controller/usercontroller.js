const usermodel = require ('./Model/usermodel');

const event = async (req,res) => {

    const {title,date} = req.body;

    res.status(200).json({
        success: true,
        data:event
    })

    exports.getevent = async (req,res) => {

        const response = await findbyuser
        
        try {
            
        } catch (error) {
            
        }
    }
    
}