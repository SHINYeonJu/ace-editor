var aceEditor = (
    function () {
        function aceEditor(rootSelector) {
            this.rootSelector = rootSelector;
            this.save = this.save.bind(this);
            this.cut = this.cut.bind(this);
            this.copy = this.copy.bind(this);
            this.paste = this.paste.bind(this);
            this.find = this.find.bind(this);
            this.replace = this.replace.bind(this);
            this.del = this.del.bind(this);
            this.selectAll = this.selectAll.bind(this);
            this.undo = this.undo.bind(this);
            this.redo = this.redo.bind(this);
        }

        aceEditor.prototype.init = function () {
            this.root = document.querySelector(this.rootSelector);
            this.toolbarEl = document.createElement('div');

            this.saveBtnEl = document.createElement('button');
            this.saveBtnEl.setAttribute('type', 'button');
            this.saveBtnEl.innerText = '저장';

            this.cutBtnEl = document.createElement('button');
            this.cutBtnEl.setAttribute('type', 'button');
            this.cutBtnEl.innerText = '잘라내기';

            this.copyBtnEl = document.createElement('button');
            this.copyBtnEl.setAttribute('type', 'button');
            this.copyBtnEl.innerText = '복사하기';

            this.pasteBtnEl = document.createElement('button');
            this.pasteBtnEl.setAttribute('type', 'button');
            this.pasteBtnEl.innerText = '붙여넣기';

            this.findBtnEl = document.createElement('button');
            this.findBtnEl.setAttribute('type', 'button');
            this.findBtnEl.innerText = '찾기';

            this.replaceBtnEl = document.createElement('button');
            this.replaceBtnEl.setAttribute('type', 'button');
            this.replaceBtnEl.innerText = '바꾸기';

            this.delBtnEl = document.createElement('button');
            this.delBtnEl.setAttribute('type', 'button');
            this.delBtnEl.innerText = '삭제';

            this.selectAllBtnEl = document.createElement('button');
            this.selectAllBtnEl.setAttribute('type', 'button');
            this.selectAllBtnEl.innerText = '모두선택';

            this.undoBtnEl = document.createElement('button');
            this.undoBtnEl.setAttribute('type', 'button');
            this.undoBtnEl.innerText = 'undo';

            this.redoBtnEl = document.createElement('button');
            this.redoBtnEl.setAttribute('type', 'button');
            this.redoBtnEl.innerText = 'redo';

            this.toolbarEl.appendChild(this.saveBtnEl);
            this.toolbarEl.appendChild(this.cutBtnEl);
            this.toolbarEl.appendChild(this.copyBtnEl);
            this.toolbarEl.appendChild(this.pasteBtnEl);
            this.toolbarEl.appendChild(this.findBtnEl);
            this.toolbarEl.appendChild(this.replaceBtnEl);
            this.toolbarEl.appendChild(this.delBtnEl);
            this.toolbarEl.appendChild(this.selectAllBtnEl);
            this.toolbarEl.appendChild(this.undoBtnEl);
            this.toolbarEl.appendChild(this.redoBtnEl);

            this.root.appendChild(this.toolbarEl);
            this.editorEl = document.createElement('div');
            this.editorEl.style.width = '80%';
            this.editorEl.style.height = '200px';
            this.editor = ace.edit(this.editorEl);
            this.editor.setTheme("ace/theme/monokai");
            this.editor.session.setMode("ace/mode/text");
            this.root.appendChild(this.editorEl);

            return this;
        };

        aceEditor.prototype.bindEvents = function () {
            this.saveBtnEl.addEventListener('click', this.save);
            this.cutBtnEl.addEventListener('click', this.cut);
            this.copyBtnEl.addEventListener('click', this.copy);
            this.pasteBtnEl.addEventListener('click', this.paste);
            this.findBtnEl.addEventListener('click', this.find);
            this.replaceBtnEl.addEventListener('click', this.replace);
            this.delBtnEl.addEventListener('click', this.delBtnEl);
            this.selectAllBtnEl.addEventListener('click', this.selectAll);
            this.undoBtnEl.addEventListener('click', this.undo);
            this.redoBtnEl.addEventListener('click', this.redo);
            return this;
        };

        aceEditor.prototype.initCommand = function () {
            this.editor.commands.addCommand({
                name: "selectAll",
                exec: this.selectAll.bind(this),
                bindKey: {win: "ctrl-a", mac: "cmd-s"}
            });
            return this;
        };

        aceEditor.prototype.save = function () { //저장
            console.log("save : ");
            console.log('save', this.editor.getValue());
        };
        /*save cut copy pasts find replace del selectAll undo redo*/

        aceEditor.prototype.cut = function () { //잘라내기
            console.log("cut");
            document.execCommand('cut');
            console.log("cut text::" + this.text);

        };

        aceEditor.prototype.copy = function () { //복사하기
            console.log("copy");
            document.execCommand('copy');
            console.log("copy text::" + this.text);

        };

        aceEditor.prototype.paste = function () { //붙여넣기
            console.log("paste");
            var data = window.clipboardData ? clipboardData.getData('Text') : '';
            this.editor.onPaste(data);
        };

        aceEditor.prototype.find = function () { //찾기
            console.log("find");
            this.editor.execCommand('find');
        };

        aceEditor.prototype.replace = function () { //바꾸기
            console.log("replace");
            this.editor.execCommand('replace');
        };

        aceEditor.prototype.del = function () { //삭제
            console.log("del");
        };


        aceEditor.prototype.selectAll = function () { //모두선택
            console.log("selectAll : ");
            this.editor.selectAll();
        };

        aceEditor.prototype.undo = function () { //undo
            console.log("undo");
            this.editor.undo();
        };

        aceEditor.prototype.redo = function () { //redo
            console.log("redo");
            this.editor.redo();
        };

        return aceEditor;
    }
)();
