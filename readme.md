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
| PATCH | /admins/:id | Admin ma'lumotimin ma'lumotini tahrirlash | true | true | full_name?, username?, password? |
| PATCH | /admins | Admin o'z ma'lumotimin ma'lumotini tahrirlash | true | | full_name?, username?, password? |
| DELETE | /admins/:id | Adminni o'chirish | true | true | |


* POST /login yo'li token qaytaradi

** GET /admins yo'liga so'rov jo'natishda query yuborish mumkin
q= type string,
sort[by]= full_name || username
sort[order]= asc || desc
page[offset]= type number
page[limit]= type number
filters[is_deleted]= type boolean
filters[is_super]= type boolean