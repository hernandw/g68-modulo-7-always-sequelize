import Users from "../models/Users.js";

export const home = (req, res) => {
  res.render('home', {
    title: 'Home Page'
  })
};

export const contact = (req, res)=>{
  res.render('contact',{
    title: 'Contact Page'
  })
}

export const login = (req, res)=>{
  res.render('login',{
    title: 'Login Page'
  })
}

export const register = (req, res)=>{
  res.render('register',{
    title: 'Register Page'
  })
}

export const about = (req, res)=>{
  res.render('about',{
    title: 'about Page'
  })
}

export const addUser = async (req, res) => {
  const { name, rut, course, level } = req.body;
  await Users.create({ name, rut, course, level });
 res.send('User added succesfully')
};

export const getUsers = async (req, res) => {
    const users = await Users.findAll()
    res.json(users);
}
