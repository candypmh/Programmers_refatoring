/*insert용 1*/
INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("어린왕자들", "종이책", 0, "어리다..", "많이 어리다..", "김어림", 100, "목차입니다.", 20000, "2019-01-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("신데렐라들", "종이책", 1, "유리구두..", "투명한 유리구두..", "김구두", 100, "목차입니다.", 20000, "2023-12-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("백설공주들", "종이책", 2, "사과..", "빨간 사과..", "김사과", 100, "목차입니다.", 20000, "2023-11-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("흥부와 놀부들", "종이책", 3, "제비..", "까만 제비..", "김제비", 100, "목차입니다.", 20000, "2023-12-08");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("인어공주들", "종이책", 11, "인어...", "7대양..", "김에리얼", 100, "목차입니다.", 15000, "2024-04-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("알라딘들", "종이책", 12, "사막..", "양탄자 백만개..", "이자스민", 100, "목차입니다.", 10000, "2024-3-10");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("겨울왕국들", "종이책", 13, "정령..", "다 눈덮힘..", "박올라프", 100, "목차입니다.", 12000, "2024-4-11");


/*조인*/
SELECT * FROM books LEFT
JOIN category ON category.id = books.category_id; 

SELECT books.id, title, img, category.category_name, form, isbn, summary, detail, author, pages, contents, price, pub_date FROM books
JOIN category ON books.category_id = category.id
HAVING books.id = 1;

SELECT * FROM books LEFT
JOIN category ON category.id = books.category_id
WHERE books.id = 1;


/*insert용 2*/
INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("콩쥐 팥쥐", 4, 0, "ebook", 4, "콩팥..", "콩심은데 콩나고..", "김콩팥", 100, "목차입니다.", 20000, "2023-12-07");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("용궁에 간 토끼", 5, 1, "종이책", 5, "깡충..", "용왕님 하이..", "김거북", 100, "목차입니다.", 20000, "2023-10-01");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("해님달님", 15, 2, "ebook", 6, "동앗줄..", "황금 동앗줄..!", "김해님", 100, "목차입니다.", 20000, "2023-07-16");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("장화홍련전", 80, 0, "ebook", 7, "기억이 안나요..", "장화와 홍련이?..", "김장화", 100, "목차입니다.", 20000, "2023-03-01");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("견우와 직녀", 8, 1, "ebook", 8, "오작교!!", "칠월 칠석!!", "김다리", 100, "목차입니다.", 20000, "2023-02-01");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("효녀 심청", 12, 0, "종이책", 9, "심청아..", "공양미 삼백석..", "김심청", 100, "목차입니다.", 20000, "2023-01-15");

INSERT INTO books (title, img, category_id, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("혹부리 영감", 22, 2, "ebook", 10, "노래 주머니..", "혹 두개 되버림..", "김영감", 100, "목차입니다.", 20000, "2023-06-05");


/*좋아요 관련*/
INSERT INTO likes VALUES(1, 1);
INSERT INTO likes (user_id, liked_book_id) VALUES(1, 2);

/*좋아요 취소*/
DELETE FROM likes WHERE user_id = 1 AND liked_book_id = 2;

/*장바구니 담기*/
INSERT INTO cartItems (book_id, quantity, user_id) VALUES (1, 1, 1);

/*장바구니와 책 조인*/
SELECT c.id, c.book_id, b.title, b.summary, c.quantity, b.price FROM cartItems c
LEFT JOIN books b ON c.book_id = b.id
WHERE user_id = 1;

/*장바구니에서 선택한 id 여러개 조회*/
SELECT * FROM cartItems WHERE user_id = 1 AND id IN(5, 9);

/*주문하기*/
/*배송 정보 입력*/
INSERT INTO delivery (address, receiver, contact) VALUES ("서울시", "김밍멍", "010-2222-3456");
const delivery_id = SELECT MAX(id) FROM delivery;

/*주문 정보 입력*/
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES ("어린왕자들", 14, 280000, 1, 1);
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id) VALUES ("어린왕자들", 14, 280000, 1, delivery_id);
const order_id = SELECT MAX(id) FROM orders;

/*주문 상세 정보 입력*/
INSERT INTO orderedBook (order_id, book_id, quantity) VALUES (1, 1, 4);
INSERT INTO orderedBook (order_id, book_id, quantity) VALUES (1, 2, 10);