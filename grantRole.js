admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "sajin", [ "root" , { role: "root", db: "admin" } ] )
