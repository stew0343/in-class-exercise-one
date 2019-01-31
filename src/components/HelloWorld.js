export default {
    name: 'HelloWorld',
    data() {
        return {
            textInput: ''

        }
    },
    methods: {
        
    },
    computed: {
        inlineValidationClass() {
            return this.textInput.length > 50;
        },
        inputValidationClass() {
            return this.textInput.length > 50 ? 'red-border' : '';
        },
        isButtonDisabled() {
            return this.textInput.length > 50 || this.textInput.length === 0;
        }
    }
}
  
