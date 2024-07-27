<template>
  <div v-if="isPopupVisible" :class="{ 'popup-overlay': isPopupVisible }">
    <main class="flex justify-center items-center px-6 py-12 bg-black max-md:px-4">
      <!-- Adjust the height here to ensure it's smaller -->
      <div
        class="flex flex-col pb-16 mt-3.5 w-full max-w-3xl max-md:max-w-full max-h-[80vh] overflow-auto bg-black rounded-lg"
      >
        <section
          class="flex flex-col items-start mt-10 text-2xl font-medium text-white w-full max-md:mt-5 max-md:text-xl"
        >
          <h2 class="text-4xl text-center mx-auto max-md:max-w-full max-md:text-2xl">
            Application form
          </h2>
          <p
            class="mt-6 mx-auto text-lg leading-8 text-center text-neutral-200 max-w-2xl max-md:mt-5 max-md:max-w-full"
          >
            "Are you facing financial difficulties and dreaming of studying at university but lack
            the funds? Look no further – here is the perfect platform to support your educational
            journey!"
          </p>
          <!-- Scrollable Container with Reduced Height -->
          <div class="w-full max-w-2xl mx-auto overflow-auto p-4">
            <form @submit.prevent="submitForm" class="w-full">
              <div class="flex flex-col items-center gap-4">
                <div class="w-full">
                  <label for="name" class="block">Name (same as identity card)</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="ic" class="block">IC</label>
                  <input
                    type="text"
                    id="ic"
                    v-model="formData.ic"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="dob" class="block">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    v-model="formData.dob"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="email" class="block">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="phone" class="block">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="address" class="block">Home Address:</label>
                  <textarea
                    id="address"
                    v-model="formData.address"
                    class="mt-2 w-full p-3 text-black"
                    required
                  ></textarea>
                </div>
                <h3 class="mt-8 text-center text-2xl max-md:mt-6 max-md:text-xl">
                  Section 2: Academic Information
                </h3>
                <div class="w-full">
                  <label for="institution" class="block">Name of Institution:</label>
                  <input
                    type="text"
                    id="institution"
                    v-model="formData.institution"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="studyYear" class="block">Current Year of Study:</label>
                  <select
                    id="studyYear"
                    v-model="formData.studyYear"
                    class="mt-2 w-full p-3 text-black"
                    required
                  >
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="0">Finished pre-university</option>
                  </select>
                </div>
                <div class="w-full">
                  <label for="major" class="block">Major/Field of Study:</label>
                  <input
                    type="text"
                    id="major"
                    v-model="formData.major"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <div class="w-full">
                  <label for="studentId" class="block">Student ID:</label>
                  <input
                    type="text"
                    id="studentId"
                    v-model="formData.studentId"
                    class="mt-2 w-full p-3 text-black"
                    required
                  />
                </div>
                <h3 class="mt-8 text-center text-2xl max-md:mt-6 max-md:text-xl">
                  Section 3: Funding Details
                </h3>
                <fieldset class="w-full mt-6">
                  <legend class="text-lg">Type of Funding Needed:</legend>
                  <div class="flex flex-col items-start gap-4 mt-4">
                    <div>
                      <input
                        type="checkbox"
                        id="laptop"
                        value="Laptop"
                        v-model="formData.fundingType"
                      />
                      <label for="laptop" class="ml-2">Laptop</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="tuition"
                        value="Tuition Assistance"
                        v-model="formData.fundingType"
                      />
                      <label for="tuition" class="ml-2">Tuition Assistance</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="books"
                        value="Books & Supplies"
                        v-model="formData.fundingType"
                      />
                      <label for="books" class="ml-2">Books & Supplies</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="other"
                        value="Other"
                        v-model="formData.fundingType"
                      />
                      <label for="other" class="ml-2">Other (please specify)</label>
                      <input
                        type="text"
                        v-model="formData.otherSpecify"
                        class="ml-4 w-full p-3 text-black"
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="w-full mt-6">
                  <label for="fundingReason" class="block"
                    >Please describe why you need this funding and how it will benefit your
                    studies:</label
                  >
                  <textarea
                    id="fundingReason"
                    v-model="formData.fundingReason"
                    class="mt-2 w-full p-3 text-black"
                    maxlength="200"
                    required
                  ></textarea>
                </div>
                <div class="w-full mt-6">
                  <p>Have you received funding from EduChainAid before?</p>
                  <div class="flex gap-4 mt-4">
                    <div class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded max-md:px-3">
                      <input
                        type="radio"
                        id="fundingYes"
                        value="Yes"
                        v-model="formData.receivedFundingBefore"
                      />
                      <label for="fundingYes">Yes</label>
                    </div>
                    <div class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded max-md:px-3">
                      <input
                        type="radio"
                        id="fundingNo"
                        value="No"
                        v-model="formData.receivedFundingBefore"
                      />
                      <label for="fundingNo">No</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="px-6 py-3 mt-8 text-xl text-center uppercase bg-green-500 text-white rounded max-md:mt-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const isPopupVisible = ref(true)
const formData = ref({
  name: '',
  ic: '',
  dob: '',
  email: '',
  phone: '',
  address: '',
  institution: '',
  studyYear: '',
  major: '',
  studentId: '',
  fundingType: [],
  otherSpecify: '',
  fundingReason: '',
  receivedFundingBefore: ''
})

const submitForm = async () => {
  const requestData = {
    name: formData.value.name,
    ic: formData.value.ic,
    dob: formData.value.dob,
    email: formData.value.email,
    phoneNumber: formData.value.phone,
    homeAddress: formData.value.address,
    nameOfInstitution: formData.value.institution,
    yearOfStudy: `Year ${formData.value.studyYear}`,
    fieldOfStudy: formData.value.major,
    studentID: formData.value.studentId,
    fundingType: formData.value.fundingType.join(', '),
    fundingDescription: formData.value.fundingReason,
    receivedFundingBefore: formData.value.receivedFundingBefore
  }

  try {
    const response = await axios.post(
      'http://subnetapi.runasp.net/ApplicationForm/Create',
      requestData
    )
    console.log(response.data)
    if (response.data) {
      isPopupVisible.value = false
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<style scoped>
/* Optional: Add custom styles for better scroll behavior */
.scrollable-container {
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
