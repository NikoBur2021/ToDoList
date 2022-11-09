# ToDoList
Project ToDoList
1. Create a button (Add) that will open the sidebar on the right side of the webbrowser.
2. Add two input fields in the sidebar: input 'date', input 'text' and the button 'Save'.
3. After filling input 'Date' and input 'Text'  and clicking on button 'Save', the note should appear on the left side of the webbrowser and in the array.
a) On the page, input 'Date' and input 'Text' should have space between!
b) After kilicking on the button 'Save' the sidebar must hide 
4. Save data to local storage.
6  Display data on the page from the localStorage
7. Сreate a function so that there is no duplication in the code.
8. Сreate and button 'Edit' for each note on the page.
9. By clicking on 'Edit', open a side-bar for editing.
10. By clicking on 'Edit' in the inputs of the sidebar, display the data from the current note.
11. When editing, by clicking on'Save', change the data in the array and in the current note.
    The button 'Save' should do two different things: add and edit
    By clicking on 'Save' we must give each action its own state (boolean)
12) To edit the note, we need the index of this note, which is located in the for loop. You can pass the index through arguments in the function.

13) By clicking on edit, we re receive index and send it to the function 'Save'. We save it to in an array, in Edit.
14) By editing (Clicking on save) in the current note, change the text content in the spans with children.


Project N3 ToDoList
1. Создать кнопку(Add) которая откроет сайд-бар справа. 
2. Добавить в сайд-бар два поля для заполнения: дата создания, текст записи и       кнопку save.
3. После заполнению полей Даты и Текста и  по нажатие на кнопку Save, запись должна появляться на странице и в массиве.
   a)  На странице запись Даты и Текста не должна быть слитной!
   б)  Сайд-бар должен скрыться после нажатия на кнопку Save
4. Сохранить данные в локальном хранилище. 
6  Отобразить данные на странице из localStorage
7. Cделать код универсальным
7. Каждая запись должна иметь кнопку редактирования
8. По нажатию на Edit, открыть сайд-бар с полями для редактирования. 
9. В полях Сайд-бара по клику Edit отобразить данные из текущей записи.
10. По клику на кнопку save при редактировании, изменять данные в массиве и в текущем поле.
    По клику на кнопку save должны выполнятся два разных действия:
    а) Если было редактирование, то выполняется действие редактирования. Если было добавление, то выполняется действие добавления. Для этого нужно дать состояние кнопке Save при Edit или при Add.
11) Что бы отредактировать нужную запись нам необходим индекс этой записи, который находится в цикле for. Передать индекс можно через аргументы функции.
12) По клику на edit мы принимаем этот индекс и отправляем его в кнопку Save где и сохраняем в массив, в условиях на Edit.
13) По редактированию (по клику на save) в текущей записи изменить текстовое содержимое в span c помощью потомков. 
