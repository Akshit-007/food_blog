import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token == null) return res.status(401);
       
        
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token,'test');
            console.log(decodedData);
            req.userId = decodedData?.id;
        } else {
           
            decodedData = jwt.decode(token);
             req.userId = decodedData?.sub;
     
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401);
    }
 
};

export default auth;