<template>
  <section
    class="flex flex-col items-start bg-white rounded-lg border border-solid shadow border-zinc-200"
  >
    <header
      class="px-6 py-3 max-w-full text-xs font-medium tracking-wide leading-4 uppercase bg-gray-50 text-slate-500 w-[422px] max-md:px-5"
    >
      Transactions
    </header>
    <div class="shrink-0 max-w-full h-px bg-zinc-200 w-[422px]"></div>
    <div
      class="px-6 py-4 max-w-full text-sm leading-5 whitespace-nowrap text-slate-500 w-[422px] max-md:px-5"
    >
      Total Tokens: {{ totalToken }}
    </div>
    <div class="overflow-x-auto w-full">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Wallet Address
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Event
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Final Amount
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ transaction.walletAddress }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ new Date(transaction.date).toLocaleString() }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ transaction.event }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ transaction.amount }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ transaction.finalAmount }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="self-stretch w-full bg-zinc-200 min-h-[1px] max-md:max-w-full"></div>
    <footer
      class="flex gap-2.5 justify-between self-stretch px-6 py-3 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full"
    >
      <p class="my-auto text-sm leading-5 text-slate-500">
        Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of
        <span class="font-medium">97</span> results
      </p>
      <nav aria-label="Pagination">
        <ul class="flex">
          <li>
            <button
              class="flex justify-center items-center px-2.5 bg-white rounded-md border border-solid border-zinc-200 h-[38px] w-[38px]"
              aria-label="Previous page"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b299aba1353ca26f9a8e0a5723a073c9f53377c8b21428d2b72ec22dd1e0739e?apiKey=0f10dcf47d4a4bb986b4f458dff7f90a&&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
                alt=""
                class="w-5 aspect-square"
              />
            </button>
          </li>
          <li v-for="page in [1, 2, 3, '...', 8, 9, 10]" :key="page">
            <button
              :class="[
                'px-4 py-2.5 text-sm font-medium leading-5 text-center whitespace-nowrap border border-solid',
                page === 1
                  ? 'text-indigo-800 bg-violet-100 border-indigo-700'
                  : 'bg-white border-zinc-200 text-slate-500'
              ]"
            >
              {{ page }}
            </button>
          </li>
          <li>
            <button
              class="flex justify-center items-center px-2.5 bg-white rounded-none border border-solid border-zinc-200 h-[38px] w-[38px]"
              aria-label="Next page"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443b8da8728f6860b431f9cf5a2df97cca707c60044b928a54a06c5d0d29463?apiKey=0f10dcf47d4a4bb986b4f458dff7f90a&&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
                alt=""
                class="w-5 aspect-square"
              />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'WalletAddressTable',
  setup() {
    const transactions = ref<
      Array<{
        walletAddress: string
        date: string
        event: string
        amount: number
        finalAmount: number
      }>
    >([])
    const totalToken = ref<number>(0)

    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://subnetapi.runasp.net/Member/GetProfile/1')
        console.log('API Response:', response.data)
        transactions.value = response.data.transactions // Adjust based on your API response structure
        totalToken.value = response.data.totalToken // Assuming totalToken is part of the response data
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    onMounted(() => {
      fetchTransactions()
    })

    return {
      transactions,
      totalToken
    }
  }
})
</script>

<style scoped>
li {
  list-style: none;
}
</style>
