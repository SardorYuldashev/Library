# Kutubxona uchun tizim

Ma'lumotlar omborida adminlar, kitobxonlar, kitoblar, nashriyotlar, mualliflar va kitobni ijarasi haqidagi ma'lumotlar saqlab boriladi.

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

** 