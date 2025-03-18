// we are putting connections here
const {username,password}=process.env 
// export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.2d4cm.mongodb.net/restroDB?retryWrites=true&w=majority&appName=Cluster0"
export const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.2d4cm.mongodb.net/restroDB?retryWrites=true&w=majority&appName=Cluster0`;

