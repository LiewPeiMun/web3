<template>
  <main class="flex justify-center items-center px-6 py-12 bg-black max-md:px-4">
    <!-- Adjust the height here to ensure it's smaller -->
    <div class="flex flex-col pb-16 mt-3.5 w-full max-w-3xl max-md:max-w-full max-h-[80vh] overflow-auto bg-black rounded-lg">
      <section class="flex flex-col items-start mt-10 text-2xl font-medium text-white w-full max-md:mt-5 max-md:text-xl">
        <h2 class="text-4xl text-center mx-auto max-md:max-w-full max-md:text-2xl">
          Application form
        </h2>
        <p class="mt-6 mx-auto text-lg leading-8 text-center text-neutral-200 max-w-2xl max-md:mt-5 max-md:max-w-full">
          "Are you facing financial difficulties and dreaming of studying at university but lack the funds? Look no further – here is the perfect platform to support your educational journey!"
        </p>
        <!-- Scrollable Container with Reduced Height -->
        <div class="w-full max-w-2xl mx-auto overflow-auto p-4">
          <form class="w-full">
            <div class="flex flex-col items-center gap-4">
              <div class="w-full">
                <label for="name" class="block">Name (same as identity card)</label>
                <input type="text" id="name" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="ic" class="block">IC</label>
                <input type="text" id="ic" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="dob" class="block">Date of Birth:</label>
                <input type="date" id="dob" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="email" class="block">Email Address:</label>
                <input type="email" id="email" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="phone" class="block">Phone Number:</label>
                <input type="tel" id="phone" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="address" class="block">Home Address:</label>
                <textarea id="address" class="mt-2 w-full p-3 text-black" required></textarea>
              </div>
              <h3 class="mt-8 text-center text-2xl max-md:mt-6 max-md:text-xl">
                Section 2: Academic Information
              </h3>
              <div class="w-full">
                <label for="institution" class="block">Name of Institution:</label>
                <input type="text" id="institution" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="studyYear" class="block">Current Year of Study:</label>
                <select id="studyYear" class="mt-2 w-full p-3 text-black" required>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  <option value="0">Finished pre-university</option>
                </select>
              </div>
              <div class="w-full">
                <label for="major" class="block">Major/Field of Study:</label>
                <input type="text" id="major" class="mt-2 w-full p-3 text-black" required />
              </div>
              <div class="w-full">
                <label for="studentId" class="block">Student ID:</label>
                <input type="text" id="studentId" class="mt-2 w-full p-3 text-black" required />
              </div>
              <h3 class="mt-8 text-center text-2xl max-md:mt-6 max-md:text-xl">
                Section 3: Funding Details
              </h3>
              <fieldset class="w-full mt-6">
                <legend class="text-lg">Type of Funding Needed:</legend>
                <div class="flex flex-col items-start gap-4 mt-4">
                  <div>
                    <input type="checkbox" id="laptop" name="fundingType" value="laptop" />
                    <label for="laptop" class="ml-2">Laptop</label>
                  </div>
                  <div>
                    <input type="checkbox" id="tuition" name="fundingType" value="tuition" />
                    <label for="tuition" class="ml-2">Tuition Assistance</label>
                  </div>
                  <div>
                    <input type="checkbox" id="books" name="fundingType" value="books" />
                    <label for="books" class="ml-2">Books & Supplies</label>
                  </div>
                  <div>
                    <input type="checkbox" id="other" name="fundingType" value="other" />
                    <label for="other" class="ml-2">Other (please specify)</label>
                    <input type="text" id="otherSpecify" class="ml-4 w-full p-3 text-black" />
                  </div>
                </div>
              </fieldset>
              <div class="w-full mt-6">
                <label for="fundingReason" class="block">Please describe why you need this funding and how it will benefit your studies:</label>
                <textarea id="fundingReason" class="mt-2 w-full p-3 text-black" maxlength="200" required></textarea>
              </div>
              <div class="w-full mt-6">
                <p>Have you received funding from EduChainAid before?</p>
                <div class="flex gap-4 mt-4">
                  <div class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded max-md:px-3">
                    <input type="radio" id="fundingYes" name="previousFunding" value="yes" />
                    <label for="fundingYes">Yes</label>
                  </div>
                  <div class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded max-md:px-3">
                    <input type="radio" id="fundingNo" name="previousFunding" value="no" />
                    <label for="fundingNo">No</label>
                  </div>
                </div>
              </div>
              <button type="submit" class="px-6 py-3 mt-8 text-xl text-center uppercase bg-green-500 text-white rounded max-md:mt-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ApplicationForm',
  // Add any necessary component logic here
});
</script>

<style scoped>
/* Optional: Add custom styles for better scroll behavior */
.scrollable-container {
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto;
}
</style>
