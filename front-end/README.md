# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








// const router = express.Router();
// const otpStore = new Map();

// const AddcreateOtp = async (req, res) => {
//   const { mobileNumber } = req.body;

//   const otp = randomInt(100000, 999999);
//   console.log(`Generated OTP for ${mobileNumber}: ${otp}`);


// // Generate random OTP function
// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

//   otpStore.set(mobileNumber, otp);

//   // Optional: Send OTP in response for development
//   res.status(200).json({ message: "OTP sent successfully", otp });
// };



// // Function to generate a random OTP
// const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();



// // Send OTP via email
// const sendOTPEmail = async (email, otp) => {
//   const transporter = nodemailer.createTransport({
//       service: 'gmail', // Adjust to your email service
//       auth: {
//           user: process.env.EMAIL_USER, // Your email
//           pass: process.env.EMAIL_PASS, // Your email password
//       },
//   });

//   const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is ${otp}`,
//   };

//   await transporter.sendMail(mailOptions);
// };

// // Store OTP temporarily (in-memory for simplicity; consider using a more persistent storage)
// // let otpStore = {}; // This should ideally be stored in a database with expiration

// const AddCreateDealer = async (req, res) => {
//   const { username, mobileNumber, email, password, otp } = req.body;

//   try {
//     const existingDealer = await dealeraccountModel.findOne({ email });
//     if (existingDealer) {
//       return res.status(409).json({ message: "Email already exists" });
//     }

//     const storedOtp = otpStore.get(mobileNumber);
//     if (!storedOtp || storedOtp !== parseInt(otp)) {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     const newDealer = new dealeraccountModel({
//       username,
//       mobileNumber,
//       email,
//       password,
//     });

//     await newDealer.save();
//     otpStore.delete(mobileNumber);

//     res.status(201).json({ message: "Dealer account created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating dealer account", error: error.message });
//   }
// }







