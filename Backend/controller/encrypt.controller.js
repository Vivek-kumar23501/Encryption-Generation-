import bcrypt from "bcrypt"

const encryptData=async (req,res)=>{
try {
    const data=req.body?.data
if(!data)
    return res.status(400).json({message:"payload is missing "})

   const encrypted= await bcrypt.hash(data.toString(),12)

   res.status(200).json({data:encrypted})


}
 catch (err) {
  res.status(500).json({message:err.message}) 
}
}

export default encryptData