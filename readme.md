# Kutubxona uchun tizim

Ma'lumotlar omborida adminlar, kitobxonlar, kitoblar, nashriyotlar, mualliflar va kitobni ijarasi haqidagi ma'lumotlar saqlab boriladi.

## !!! Proyekni run qilishdan oldin !!!
"node seeds/seeds.js" buyrug'ini yozib DBga fake ma'lumotlarni qo'shib oling

### Seeddagi adminlar

| role | username | password |
| --- | --- | --- |
| super_admin | "sardorbek" | "123456" |
| admin | "imron" | "1234" |
| admin | "orzu" | "1234" |

## Adminlar uchun

| Method | url | description | token | only super_admin | body |
|---|---|---|---|---|---|
| POST | /login | Login qilishi | | | username, password |
| POST | /admins | Adminni ro'yxatdan o'tkazish | true | true | full_name, username, password |
| GET | /admins | Adminlar ro'yxatini olish | true | | |
| GET | /admins/:id | Bitta admin ma'lumoti | true | | |
| PATCH | /admins/:id | Admin ma'lumotini tahrirlash | true | true | full_name?, username?, password? |
| PATCH | /admins | Admin o'z ma'lumotini tahrirlash | true | | full_name?, username?, password? |
| DELETE | /admins/:id | Adminni o'chirish | true | true | |


*** POST /login yo'li token qaytaradi
*** GET /admins yo'liga so'rov jo'natishda query yuborish mumkin
<br>
q= type string,
<br>
sort[by]= full_name || username
<br>
sort[order]= asc || desc
<br>
page[offset]= type number
<br>
page[limit]= type number
<br>
filters[is_deleted]= type boolean
<br>
filters[is_super]= type boolean

## Kitobxonlar uchun

| Method | url | description | token | body |
|---|---|---|---|---|
| POST | /borrowers | Foydalanuvchini ro'yxatdan o'tkazish | true | full_name, address, phone |
| GET | /borrowers | Foydalanuvchilar ro'yxatini olish | true | |
| GET | /borrowers/:id | Bitta foydalanuvchi ma'lumoti | true | |
| PATCH | /borrowers/:id | Foydalanuvchi ma'lumotini tahrirlash | true | full_name?, address?, phone? |
| DELETE | /borrowers/:id | Foydalanuvchini o'chirish | true | |

*** GET /borrowers yo'liga so'rov jo'natishda query yuborish mumkin
<br>
q= type string,
<br>
sort[by]= full_name || phone
<br>
sort[order]= asc || desc
<br>
page[offset]= type number
<br>
page[limit]= type number
<br>
filters[is_deleted]= type boolean

## Nashriyotlar uchun

| Method | url | description | token | body |
|---|---|---|---|---|
| POST | /publishers | Nashriyotni ro'yxatdan o'tkazish | true | name, address, phone |
| GET | /publishers | Nashriyotlar ro'yxatini olish | true | |
| GET | /publishers/:id | Bitta nashriyot ma'lumoti | true | |
| PATCH | /publishers/:id | Nashriyot ma'lumotini tahrirlash | true | name?, address?, phone? |
| DELETE | /publishers/:id | Nashriyotni o'chirish | true | |

*** GET /publishers yo'liga so'rov jo'natishda query yuborish mumkin
<br>
q= type string,
<br>
sort[by]= name
<br>
sort[order]= asc || desc
<br>
page[offset]= type number
<br>
page[limit]= type number
<br>
filters[is_deleted]= type boolean