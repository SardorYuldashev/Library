# Kutubxona uchun tizim

Ma'lumotlar omborida adminlar, kitobxonlar, kitoblar, nashriyotlar, mualliflar va kitobni ijarasi haqidagi ma'lumotlar saqlab boriladi.

## Adminlar uchun

| Method | url | description | only super_admin | token | body | query |
|---|---|---|---|
| POST | /login | Login qilishi | |
| POST | /admins | Adminni ro'yxatdan o'tkazish | true |
| GET | /admins | Adminlar ro'yxatini olish | |
| GET | /admins/:id | Bitta admin ma'lumoti | |
| PATCH | /admins/:id | Admin ma'lumotimin ma'lumotini tahrirlash | true |
| PATCH | /admins | Admin o'z ma'lumotimin ma'lumotini tahrirlash | |
| DELETE | /admins/:id | Adminni o'chirish | true |

** 