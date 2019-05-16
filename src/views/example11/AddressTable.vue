<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>detail</th>
          <th>comment</th>
          <th>insertTime</th>
        </tr>
      </thead>
      <tr v-for="(a, index) in addresses" :key="index">
        <td>{{ index }}</td>
        <td>{{ a.detail }}</td>
        <td>{{ a.comment }}</td>
        <td>{{ a.insertTime }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getAddresses } from "@/api/Main";
export default {
  data: () => ({
    addresses: [{ id: null, detail: null, comment: null }],
    insertTime: null
  }),
  created() {
    getAddresses({ uid: 1 });
    bus.$on(bus.addresses, data => {
      this.addresses = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.addresses);
  }
};
</script>
