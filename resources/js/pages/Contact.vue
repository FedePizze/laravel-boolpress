<template>
  <div class="container">
      <div class="row">
        <div class="col-12">
            <form @submit.prevent="inviaMail">

                <div v-if="success" class="alert alert-success">
                    Mail inviata
                </div>

                <div class="form-group">
                    <label for="name">Il tuo nome</label>
                    <input type="text" class="form-control" :class="{'is-invalid':errors.name}" id="name" name="name" v-model="name">
                    <p v-for="(error, index) in errors.name" :key="'error_name'+index" class="invalid-feedback">
                        {{error}}
                    </p>
                </div>

                <div class="form-group">
                    <label for="email">La tua mail</label>
                    <input type="email" class="form-control" :class="{'is-invalid':errors.email}" id="email" name="email" v-model="email">
                    <p v-for="(error, index) in errors.email" :key="'error_email'+index" class="invalid-feedback">
                        {{error}}
                    </p>
                </div>

                <div class="form-group">
                    <label for="message">Messaggio</label>
                    <textarea class="form-control" :class="{'is-invalid':errors.message}" id="message" rows="10" name="message" v-model="message"></textarea>
                    <p v-for="(error, index) in errors.message" :key="'error_message'+index" class="invalid-feedback">
                        {{error}}
                    </p>
                </div>

                <button type="submit" class="btn btn-primary">{{validazione?'Invio in corso...':'Invia'}}</button>

            </form>
        </div>
      </div>
  </div>
</template>



<script>
export default {

    name: "Contact",

    data() {
        return {
            name: '',
            email: '',
            message: '',

            validazione: false,
            errors: {},
            success: false,
        }
    },

    methods: {
        inviaMail() {
            this.validazione = true;

            axios.post('/api/contacts', {
              'name': this.name,
              'email': this.email,
              'message': this.message
            }).then(response => {

            this.validazione = false;

                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.success = false;
                } else {
                    this.success = true;
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.errors = {};
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
