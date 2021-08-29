INSERT INTO projects (name, priority, deliverydate) VALUES
('Aprender a instalar y configurar Postgresql', 1, '2021-08-28'),
('Crear un proyecto en Node Js Y Express', 2, '2021-08-28'),
('Realizar el primer CRUD en mi nuevo stack', 2, '2021-08-28');


INSERT INTO tasks (projectid, name, done) VALUES
(1, 'Ver instructivo en videos de Youtube', false),
(1, 'Realizar el procedimiento aprendido', false),
(1, 'Crear tablas para un CRUD de pruebas', false),
(2, 'Generar estructura b{asica del API en Node JS con Express', false);