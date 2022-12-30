{
    "name": "Ludum Utilities", // Users will see this name in the extension manager
    "description": "An extension of base Ludum to improve it for the more advanced.", // Also shown in the extension manager
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Variables", // The name of the category
            "blocks": [ // The blocks that the category contains
                {
                    "type": "ludum_util_boolean", // The internal name of the block
                    "block": { // The block definition (see https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)
                        init: function() {
                            this.appendValueInput("BOOLEAN")
                                .setCheck(null)
                                .appendField("Set")
                                .appendField(new Blockly.FieldTextInput("Boolean"), "KEY")
                                .appendField("to")
                                .appendField(new Blockly.FieldCheckbox("TRUE"), "VALUE");
                            this.setPreviousStatement(true, "String");
                            this.setNextStatement(true, "Boolean");
                            this.setColour(230);
                            this.setTooltip("Boolean with a visible checkbox, when toggled is true, else isnt true.");
                            this.setHelpUrl("https://en.wikipedia.org/wiki/Boolean");
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n";
                    }
                }
            ]
        }
    ]
}

// TODO
// Finish documenting more advanced code blocks.
