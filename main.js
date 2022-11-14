// use dypit;
// show dbs
// db
db.teacher.insertMany([
    {id:1,tname:"pooja",dno:1,dname:"cs",exp:2,salary:20000,doj:"2022-10-14"},
    {id:2,tname:"ram",dno:1,dname:"cs",exp:1,salary:10000,doj:"2022-11-14"},
    {id:3,tname:"shyam",dno:2,dname:"it",exp:3,salary:30000,doj:"2022-09-11"},
    {id:4,tname:"mihir",dno:3,dname:"civil",exp:4,salary:40000,doj:"2022-08-14"}

]);

db.student.insertMany([
        {id:1,sname:"pande",roll:1,class:12},
        {id:2,sname:"bigil",roll:2,class:11},
        {id:3,sname:"mehata",roll:3,class:10},
        {id:4,sname:"nage",roll:4,class:12},
    ])

// 1)
// db.teacher.find({}).pretty();

// 2)
// db.teacher.find({dname:"cs"},{tname:1}).pretty()

// 3)
// db.teacher.find({$or:[{dname:"it"},{dname:"cs"},{dname:"civil"}]}).pretty();

// 4)
// db.teacher.find({$and:[{$or:[{dname:"it"},{dname:"cs"},{dname:"civil"}]},{salary:{$gte:20000}}]}).pretty();

// 5)
// db.student.find({$or:[{roll:2},{sname:"nage"}]})

// 6)
// db.teacher.updateOne({tname:"shyam"},{$set:{exp:10}})
// db.teacher.find({tname:"shyam"})

// 7)
// db.teacher.updateMany({dname:"it"},{$set:{dname:"comp"}})
// db.teacher.find({"dname" : "comp"}).pretty()

// 9) 10)
// db.teacher.save({id:4,tname:"sa"})
// db.teacher.find().pretty()

// 11)
// db.teacher.deleteMany({"dname" : "it"})
// db.teacher.find().pretty()

// 12)
// db.teacher.find().pretty().limit(3)
// db.teacher.aggregate([
//         {$sort:{id:1}},
//         {$limit:2}
//     ]).pretty()
