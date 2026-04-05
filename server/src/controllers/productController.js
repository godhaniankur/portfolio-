const dbService = require('../services/dbService');

exports.getAll = (req, res) => {
    res.json(dbService.read());
};

exports.create = (req, res) => {
    const data = dbService.read();
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    dbService.write(data);
    res.status(201).json(newItem);
};

exports.update = (req, res) => {
    let data = dbService.read();
    const index = data.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: "Data is Found." });
    
    data[index] = { ...data[index], ...req.body };
    dbService.write(data);
    res.json(data[index]);
};

exports.remove = (req, res) => {
    let data = dbService.read();
    data = data.filter(p => p.id != req.params.id);
    dbService.write(data);
    return res.status(204).json({isSuccess:true,message:"Delete Product SuccessFully."});
};