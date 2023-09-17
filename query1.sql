-- SELECT * from SalesLT.Address;

-- SELECT * from SalesLT.Customer;

-- SELECT * from SalesLT.Product;

-- SELECT * from SalesLT.ProductModel;

SELECT C.FirstName, CA.AddressType 
from SalesLT.Customer as C 
JOIN SalesLT.CustomerAddress as CA ON 
C.CustomerID = CA.CustomerID