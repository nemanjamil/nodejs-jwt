module.exports = {
    "port": 2600,
    "appEndpoint": "http://localhost:2600",
    "apiEndpoint": "http://localhost:2600", 
    "jwt_secret": "Belgrade011",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    }
};

