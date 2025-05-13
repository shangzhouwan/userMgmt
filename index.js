const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: false }, // 性别
  address: { type: String, required: false }, // 地址
  phone: { type: String, required: false }, // 手机
  education: { type: String, required: false }, // 学历
  educationHistory: [
    {
      institution: { type: String, required: true }, // 学校名称
      degree: { type: String, required: false },     // 学位
      fieldOfStudy: { type: String, required: false }, // 专业领域
      startDate: { type: Date, required: false },    // 开始时间
      endDate: { type: Date, required: false },      // 结束时间
    },
  ], // 学习经历
  workHistory: [
    {
      company: { type: String, required: true },     // 公司名称
      role: { type: String, required: true },        // 职位
      startDate: { type: Date, required: false },    // 开始时间
      endDate: { type: Date, required: false },      // 结束时间
      description: { type: String, required: false }, // 工作描述
    },
  ], // 工作经历
  notes: { type: String, required: false }, // 备注
  birthDate: { type: Date, required: false }, // 出生年月
  deathDate: { type: Date, required: false }, // 死亡年月
  father: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // 父亲
  mother: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // 母亲
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // 子女
});

const User = mongoose.model('User', userSchema);

// Routes

// Add User
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update User
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete User
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
