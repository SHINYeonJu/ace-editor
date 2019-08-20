var SMTEditor = (
    function() {
        function SMTEditor(rootSelector) {
            this.rootSelector = rootSelector;
        }

        SMTEditor.prototype.init = function() {
            this.root = document.querySelector(this.rootSelector);
            this.toolBarEl = document.createElement('div');
            this.saveBtnEl = document.createElement('button');
            this.saveBtnEl.innerText = '저장';
            this.selectAllBtnEl = document.createElement('button');
            this.selectAllBtnEl.innerText = '모두선택';
            this.toolBarEl.appendChild(this.saveBtnEl);
            this.toolBarEl.appendChild(this.selectAllBtnEl);
            this.root.appendChild(this.toolBarEl);
            this.editorEl = document.createElement('div');
            this.editorEl.style.width = '100%';
            this.editorEl.style.height = '500px';
            this.editor = ace.edit(this.editorEl);
            this.editor.setTheme("ace/theme/monokai");
            this.editor.session.setMode("ace/mode/text");
            this.root.appendChild(this.editorEl);
            return this;
        };

        SMTEditor.prototype.destroy = function() {

        };

        SMTEditor.prototype.bindEvents = function() {
            this.editor.on('change', e => console.log(e));
            this.saveBtnEl.addEventListener('click', function () { this.save(); });
            this.selectAllBtnEl.addEventListener('click', function () { this.selectAll(); });
            return this;
        };

        SMTEditor.prototype.initCommand = function() {
            this.editor.commands.addCommand({
                name: "selectAll",
                exec: this.selectAll.bind(this),
                bindKey: { win: "ctrl-a", mac: "cmd-s" }
            });
            return this;
        };

        SMTEditor.prototype.save = function() {
            console.log('save', this.editor.getValue());
        };

        SMTEditor.prototype.selectAll = function () {
            this.editor.selectAll();
        };

        return SMTEditor;
    }
)();