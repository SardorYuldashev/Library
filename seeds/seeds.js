const mongoose = require('mongoose');
const Admin = require('../src/modules/admins/_Admin');
const Borrower = require('../src/modules/borrowers/_Borrower');
const Publisher = require('../src/modules/publishers/_Publisher');
const Author = require('../src/modules/authors/_Author');
const Book = require('../src/modules/books/_Book');
const Loan = require('../src/modules/loans/_Loan');
const config = require('../src/shared/config');
const bcrypt = require('bcryptjs')

mongoose
  .connect(`mongodb://${config.db.host}/${config.db.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB ga ulandi.');
  })
  .catch((err) => {
    console.log('DB da xatolik: ', err);
  });



const seedAdmins = [
  {
    _id: "64c40e64fa5abcf2cb5febd4",
    full_name: "Sardor Yuldashev",
    username: "sardorbek",
    password: bcrypt.hashSync('123456', 10),
    is_super: true,
    is_deleted: false
  },
  {
    _id: "64c419af38db71f5ea7aadbb",
    full_name: "Imron Abdusalimov",
    username: "imron",
    password: bcrypt.hashSync('1234', 10),
    is_super: false,
    is_deleted: false
  },
  {
    _id: "64c419af38db71f5ea7aadba",
    full_name: "Orzu Mirzayev",
    username: "orzu",
    password: bcrypt.hashSync('1234', 10),
    is_super: false,
    is_deleted: false
  },

];

const seedBorrowers = [
  {
    _id: "64c41c81996b735434437233",
    full_name: "Aziz Nabiyev",
    address: "Toshkent sh, Yunusobod",
    phone: "+998901234567",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437234",
    full_name: "Bunyod Jo'rayev",
    address: "Toshkent sh, Sergeli",
    phone: "+998909876543",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437235",
    full_name: "Oybek Xasanov",
    address: "Farg'ona vil, Bog'dod",
    phone: "+998901202233",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437236",
    full_name: "Umid Shaxobov",
    address: "Jizzax vil, Paxtakor",
    phone: "+998946258354",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437237",
    full_name: "Ozoda Komilova",
    address: "Qashqadaryo vil, Chiroqchi",
    phone: "+998977785216",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437238",
    full_name: "Bobur Axmedov",
    address: "Surxondaryo vil, Sho'rchi",
    phone: "+998916532598",
    is_deleted: false
  },
  {
    _id: "64c41c81996b735434437239",
    full_name: "Begzod To'ychiyev",
    address: "Toshkent vil, Chirchiq",
    phone: "+998998524136",
    is_deleted: false
  },
];

const seedPublishers = [
  {
    _id: "64c41f627431862d54847e01",
    name: "AKADEMNASHR",
    address: "Toshkent sh, Chilonzor",
    phone: "+998913524782",
    is_deleted: false
  },
  {
    _id: "64c41f627431862d54847e02",
    name: "Dono Nashriyoti",
    address: "Toshkent sh, Yakkasaroy",
    phone: "+998912458445",
    is_deleted: false
  },
  {
    _id: "64c41f627431862d54847e03",
    name: "Sharq",
    address: "Toshkent sh, Shayxontoxur",
    phone: "+998912335445",
    is_deleted: false
  }
];

const seedAuthors = [
  {
    _id: "64c420cd4cf1159ce6399b41",
    full_name: "Abdulla Qodiriy",
    is_deleted: false
  },
  {
    _id: "64c420cd4cf1159ce6399b42",
    full_name: "G'ofur G'ulom",
    is_deleted: false
  },
  {
    _id: "64c420cd4cf1159ce6399b43",
    full_name: "Chingiz Aytmatov",
    is_deleted: false
  },
  {
    _id: "64c420cd4cf1159ce6399b44",
    full_name: "Muhammad Yusuf",
    is_deleted: false
  },
  {
    _id: "64c420cd4cf1159ce6399b45",
    full_name: "Alisher Navoiy",
    is_deleted: false
  },
];

const seedBooks = [
  {
    _id: "64c4234e78042b4ddffe9d1e",
    title: "Xamsa",
    publisher: "64c41f627431862d54847e03",
    author: "64c420cd4cf1159ce6399b45",
    copies: 5,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d1f",
    title: "Sittai zaruriya",
    publisher: "64c41f627431862d54847e02",
    author: "64c420cd4cf1159ce6399b45",
    copies: 21,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d20",
    title: "Badoyi ul-bidoya",
    publisher: "64c41f627431862d54847e01",
    author: "64c420cd4cf1159ce6399b45",
    copies: 8,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d21",
    title: "Mehrobdan chayon",
    publisher: "64c41f627431862d54847e03",
    author: "64c420cd4cf1159ce6399b41",
    copies: 12,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d22",
    title: "O'tkan kunlar",
    publisher: "64c41f627431862d54847e03",
    author: "64c420cd4cf1159ce6399b41",
    copies: 17,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d23",
    title: "Shum bola",
    publisher: "64c41f627431862d54847e02",
    author: "64c420cd4cf1159ce6399b42",
    copies: 32,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d24",
    title: "Sen yetim emassan",
    publisher: "64c41f627431862d54847e01",
    author: "64c420cd4cf1159ce6399b42",
    copies: 17,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d25",
    title: "Ufq",
    publisher: "64c41f627431862d54847e01",
    author: "64c420cd4cf1159ce6399b43",
    copies: 4,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d26",
    title: "Xalq bo'l, elim",
    publisher: "64c41f627431862d54847e03",
    author: "64c420cd4cf1159ce6399b44",
    copies: 2,
    is_deleted: false,
  },
  {
    _id: "64c4234e78042b4ddffe9d27",
    title: "Saylanma",
    publisher: "64c41f627431862d54847e02",
    author: "64c420cd4cf1159ce6399b44",
    copies: 9,
    is_deleted: false,
  },
];

const seedLoans = [
  {
    book: "64c4234e78042b4ddffe9d1e",
    admin: "64c419af38db71f5ea7aadba",
    borrower: "64c41c81996b735434437233",
    out_date: new Date("2023-01-01"),
    due_date: new Date("2023-02-01"),
    returned: true
  },
  {
    book: "64c4234e78042b4ddffe9d1f",
    admin: "64c419af38db71f5ea7aadba",
    borrower: "64c41c81996b735434437235",
    out_date: new Date("2023-03-15"),
    due_date: new Date("2023-03-29"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d21",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d22",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d23",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d24",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d25",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d27",
    admin: "64c419af38db71f5ea7aadbb",
    borrower: "64c41c81996b735434437239",
    out_date: new Date("2023-07-19"),
    due_date: new Date("2023-08-20"),
    returned: false
  },
  {
    book: "64c4234e78042b4ddffe9d26",
    admin: "64c419af38db71f5ea7aadba",
    borrower: "64c41c81996b735434437237",
    out_date: new Date("2023-06-05"),
    due_date: new Date("2023-08-01"),
    returned: false
  },
];

const seedDB = async () => {
  await Admin.deleteMany({});
  await Admin.insertMany(seedAdmins);

  await Borrower.deleteMany({});
  await Borrower.insertMany(seedBorrowers);

  await Publisher.deleteMany({});
  await Publisher.insertMany(seedPublishers);

  await Author.deleteMany({});
  await Author.insertMany(seedAuthors);

  await Book.deleteMany({});
  await Book.insertMany(seedBooks);

  await Loan.deleteMany({});
  await Loan.insertMany(seedLoans);
};

seedDB().then(() => {
  mongoose.connection.close();
});