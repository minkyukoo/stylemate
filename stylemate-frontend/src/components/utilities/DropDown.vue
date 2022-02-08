<template>
  <div class="input-select">
    <label>Country</label>
    <select v-model="selected">
      <option
        v-for="country in countries"
        :key="country.code"
        :value="country.code"
      >{{ country.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data() {
    return {
      selected: '',
      countries: [
        {
          name: 'Please Select an Option',
          code: ''
        }
      ]
    }
  },
  mounted() {
    this.countries.push(
      {
        name: '전체',
        code: 'all'
      },
       {
        name: '전체',
        code: 'all'
      }
    )
  },
  computed: {
    selectedName() {
      var self = this,
        name = "";

      this.countries.filter(function (country) {
        if (country.code == self.selected) {
          name = country.name
          return;
        }
      })

      return name;
    }
  }
}
</script>

<style scoped>
.input-select {
  position: relative;
  display: inline-block;
  width: 100%;
}
.input-select label {
  display: inline-block;
  width: 100%;
  font-size: 0.75em;
}
.input-select select {
  cursor: pointer;
  height: 44px;
  padding-bottom: 8px;
  appearance: none;
  position: relative;
  background-color: #fff;
  padding: 0.625em 0.5em;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  width: 100%;
}
span {
  padding-top: 1em;
}
</style>