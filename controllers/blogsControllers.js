const Blog = require('../models/blogsSchema')

module.exports = {

    createBlogs: async (req, res) => {
        try {

            
            if (!req.body.title || !req.body.content || !req.body.author) {
                return res.status(200).json({ success: false, message: 'Please fill all details' });

            }
            const data = await Blog.create({
                title: req.body.title,
                content: req.body.content,
                author: req.body.author
            })

            return res.status(200).json({ success: true, message: 'Data created successfully', data });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    allBlogs: async (req, res) => {
        try {

            const data = await Blog.find();
            return res.status(200).json({ success: true, message: 'Data created successfully', data });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    updateBlogs: async (req, res) => {
        try {

    


            const blogsDetails = {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author
            };
            const updatedUser = await Blog.findOneAndUpdate(
                { _id: req.body._id },
                blogsDetails,
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "Document not found" });
            }

            res.status(200).json({ message: "Document updated successfully", updatedUser });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },
    deleteBlogs: async (req, res) => {
        try {


            const blogId = req.body._id;

            const deletedBlog = await Blog.findByIdAndDelete(blogId);

            if (!deletedBlog) {
                return res.status(404).json({ message: 'Blog post not found' });
            }

            res.status(200).json({ message: 'Blog post deleted successfully', deletedBlog });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

}