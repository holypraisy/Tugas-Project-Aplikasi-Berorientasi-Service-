// import Employee from "../models/EmployeeModel.js";

// export const getEmployees = async(req, res) => {
//     try {
//         const response = await Employee.findAll();
//         res.status(200).json(response);
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// export const getEmployeeById = async(req, res) => {
//     try {
//         const response = await Employee.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// export const addEmployee = async(req, res) => {
//     try {
//         await Employee.create(req.body);
//         res.status(201).json({message : "Data Pegawai Telah Ditambahkan"});
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// export const updateEmployee = async(req, res) => {
//     try {
//         await Employee.update(req.body, {
//             where:{
//                 id:req.params.id
//             }
//         });
//         res.status(200).json({message : "Data Pegawai Telah Diperbaharui"});
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// export const deleteEmployee = async(req, res) => {
//     try {
//         await Employee.destroy( {
//             where:{
//                 id:req.params.id
//             }
//         });
//         res.status(200).json({message : "Data Pegawai Telah Dihapus"});
//     } catch(error) {
//         console.log(error.message);
//     }

// }

// export default getEmployees;

import Employee from "../models/EmployeeModel.js";

export const getEmployees = async (req, res) => {
    try {
        const response = await Employee.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const response = await Employee.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!response) {
            return res.status(404).json({ message: "Pegawai tidak ditemukan" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const addEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json({ message: "Data Pegawai Telah Ditambahkan", data: newEmployee });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const [updatedRows] = await Employee.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Pegawai tidak ditemukan" });
        }

        res.status(200).json({ message: "Data Pegawai Telah Diperbaharui" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const deletedRows = await Employee.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Pegawai tidak ditemukan" });
        }

        res.status(200).json({ message: "Data Pegawai Telah Dihapus" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const patchEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!employee) {
            return res.status(404).json({ message: "Pegawai tidak ditemukan" });
        }

        // Update only the fields that are present in req.body
        await employee.update(req.body);

        res.status(200).json({ message: "Data Pegawai Telah Diperbaharui (PATCH)" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default getEmployees;