const db = require('../config/db.manager');

// Get all customers
exports.getAllCustomers = async function (req, res) {
    try {
        const results = await db.getSalesCustomers();
        res.status(200).json({
            status: 'success',
            data: results.recordsets[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching the customers'
        });
    }
};

// Get customer by ID (to be implemented)
exports.getCustomerById = function (req, res) {
    res.status(200).json({
        status: 'not implemented'
    });
};

// Create a new customer (to be implemented)
exports.createCustomer = function (req, res) {
    res.status(200).json({
        status: 'not implemented'
    });
};

// Update customer by ID (to be implemented)
exports.updateCustomerById = function (req, res) {
    res.status(200).json({
        status: 'not implemented'
    });
};

// Delete customer by ID (to be implemented)
exports.deleteCustomerById = function (req, res) {
    res.status(200).json({
        status: 'not implemented'
    });
};
