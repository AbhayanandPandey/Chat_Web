import Message from '../models/message.model.js';

export const getUsers = async (req, res) => {
    try {
        const loogetgedUserId = req.user.id;
        const filteredUsers = await User.find({ _id: { $ne: loogetgedUserId } }).select('-password');

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
        
    }
}


export const getUserMessages = async (req, res) => {
    try {
        const { id:userChatId } = req.params;
        const loggedUserId = req.user._id;
        const messages = await Message.find({
            $or: [
                { senderId: loggedUserId, receiverId: userChatId },
                { senderId: userChatId, receiverId: loggedUserId },
            ],
        })
        res.status(200).json(messages);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
        
    }
}

export const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body;
        const { id: reciverId } = req.params;
        const userId = req.user._id;
        let imageUrl = null;
        if (image) {
            const upload = await cloudinary.uploader.upload(image);
            imageUrl = upload.secure_url;
        }
        const newMessage = await Message.create({
            senderId: userId,
            receiverId: reciverId,
            text,
            image: imageUrl,
        });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
        
    }
}