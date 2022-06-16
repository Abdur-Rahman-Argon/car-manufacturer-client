import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto w-9/12 my-4 bg-gray-50 p-16">
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h1>
            <b> Question: 1 </b> How will you improve the performance of a React
            Application?
          </h1>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer: </b>
            React Application 5 প্রকারে Optimization করা যায়।
            <br />
            1.যেখানে প্রয়োজন সেখানে উপাদানের অবস্থা অনুযায়ী state রাখা যায়।
            <br />
            2. অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করার জন্য Memorizeing React
            component ব্যবহার করা হয়।
            <br />
            3. ডায়নামিক ভাবে import() ব্যবহার করে React কোড ব্যবহার করা হয়।
            <br />
            4. React এর মধ্যে ডায়নামিক তালিকা পদ্ধতি ব্যবহার করা যায়।
            <br />
            5. React এর মধ্যে Lazy লোডিং animation. আছে।
            <br />
          </p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question : 2 </b> What are the different ways to manage a state
            in a React application?
          </h2>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer: </b>
            React Application 5 প্রকারে steate manage করা যায়।
            <br />
            1 . Communication State : Connect ব্যবহার করে যেকোনো জায়গা থেকে
            Communication State অ্যাক্সেসযোগ্য। এটি স্বাধীনভাবে সংরক্ষিত এবং
            Redux দ্বারা পরিচালিত করা যায় ।
            <br />
            2. Data State : Data State এমন তথ্য কভার করে যা আপনার React
            Application বিভিন্ন কাজের জন্য অস্থায়ীভাবে Data সঞ্চয় করে |
            <br />
            3. Control State : Control State একটি Rule অনুসরণ করে যা শুধুমাত্র
            একটি একক স্ক্রিনের জন্য নির্দিষ্ট উপাদান বা একটি ধারক সংরক্ষণ করার
            অনুমতি দেয়।
            <br />
            4. Session State : Session State অ্যাপ্লিকেশনটির ব্যবহারকারী
            সম্পর্কে তথ্য Save থাকে |
            <br />
            5. Location State : Location State হল UTF-8 Display যা URL বারে
            প্রদর্শিত হয়|
            <br />
          </p>
          <p className="mx-8 my-3"></p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h1>
            <b> Question : 3 </b> How does prototypical inheritance work?
          </h1>
        </div>
        <hr className="w-11/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer : </b>
            <br />
            Inheritance হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা Objects এ পদ্ধতি
            এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে
            একটি Object অন্য Object এর বৈশিষ্ট্য এবং পদ্ধতির অংশীদার হতে পারে।
            Traditionally, একটি Object পেতে এবং Set করার জন্য, আমরা
            Object.getPrototypeOf এবং Object.setPrototypeOf ব্যবহার করা হয়।
          </p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question : 4 </b> Why you do not set the state directly in
            React. For example, if you have const [products, setProducts] =
            useState([]). Why you do not set products = [...] instead, you use
            the setProducts
          </h2>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer : 5 </b>
            useState একটি হুক যা উপাদানগুলিতে State ভেরিয়েবল থাকতে দেয়। এই
            ফাংশনে Initial state পাস করে এবং বর্তমান অবস্থার মান এবং এই মান
            আপডেট করার জন্য অন্য একটি ফাংশন সহ একটি ভেরিয়েবল প্রদান করে।
            <br />
            যদি steate এর পূর্ববর্তী মান ছাড়া নতুন মান সংযোগ করতে চান তবে
            অবশ্যই set function ব্যবহার করতে হবে এটা ব্যবহার করে সরাসরি যোগ করা
            যায় না। কারণ useState এর মধ্যে this.setState ফাংশন আছে যা ঐ state
            মান সেট করে এবং ভেরিয়েবল এর মধ্যে সংরক্ষিত হয়। এর পর আমরা তা
            ব্যবহার করতে পারি
          </p>
          <p className="mx-8 my-3"></p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question : 5 </b> You have an array of products. Each product
            has a name, price, description, etc. How will you implement a search
            to find products by name?
          </h2>
          <p></p>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer : </b>
            <br />
            const place = [ 'Shantahar', 'BonaniPur', 'BiramPur', 'ShahajadPur',
            'Birgong'];
            <br />
            const search = 'sha';
            <br />
            const matched = place.filter(p => p.toLowerCase().includes(search));
          </p>
          <p className="mx-8 my-3"></p>
        </div>
      </div>
      {/* <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question : 6 </b> What is a unit test? Why should write unit
            tests?
          </h2>
          <p></p>
        </div>
        {/* <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer : </b>
          </p>
          <p className="mx-8 my-3"></p>
        </div> 
      </div> */}
    </div>
  );
};

export default Blog;
