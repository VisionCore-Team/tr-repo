import { useFormik } from 'formik';
import { Link } from "react-scroll";
import axios from "axios";
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from "react";
import { TiLocation } from "react-icons/ti";
import { MdContactPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from "react-icons/fa6";
import { useStateContext } from '../../../context/StateContext';
import { doctypeList } from './uploadDocFormatsList';
import './contactModal_translate';

interface FormValues {
  fullName: string;
  email: string;
  messageTopic: string;
  phone: string;
  message: string;
  file: File | null;
}


const ContactModal: React.FC = () => {

  const { t } = useTranslation();

  const { setShowContactModal, modalRef } = useStateContext();

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      messageTopic: '',
      message: '',
      file: null
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(t('fullNameRequired')),
      email: Yup.string().email(t('validEmail')).required(t('emailRequired')),
      messageTopic: Yup.string().required(t('topicRequired')),
      phone: Yup.string()
        .matches(/^\+?[0-9]{1,15}$/, t('validNumber')),
      message: Yup.string().required(t('messageRequired')),
      file: Yup.mixed()
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true; // test is ok if value is empty
          return value instanceof File && value.size <= 2 * 1024 * 1024; // checking for doc type and size
        })
        .test("fileType", "Unsupported file format", (value) => {
          if (!value) return true; 
          return value instanceof File && doctypeList.includes(value.type);
        }),
    }),
    onSubmit: (values) => {
      if (recaptchaValue) {
        console.log('Form submitted:', values);
        handleSubmit();
        setShowContactModal(false);
        formik.resetForm();
      } else {
        alert('Please verify you are not a robot');
      }
    },
  });

  const handleRecaptchaChange = (value: string | null): void => {
    setRecaptchaValue(value);
  };


  const siteKey = import.meta.env.VITE_REACT_APP_SITE_KEY;

  if (!siteKey) {
    throw new Error("REACT_APP_SITE_KEY is missing in .env");
  }

  const handleSubmit = async () => {
    if (!recaptchaValue) {
      alert(t('verifyRobot'));
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/verify-recaptcha", { recaptchaValue });
      alert(response.data);
    } catch (error) {
      alert(t("recaptchaError"));
    }
  };

  return (
    <div className="absolute top-[400px] inset-0 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white w-[70vw] rounded-lg shadow-lg flex">
        {/* Left Section: Text and Contact Info */}
        <div className="w-1/2 p-6">
          {/* Modal Header */}
          <div className="flex flex-col mb-4">
            <button
              className="text-gray-600 hover:text-gray-800 mb-4 transition"
              onClick={() => setShowContactModal(false)}
            >
              <IoCloseSharp size={24} />
            </button>
            <h2 className="text-gray-700 text-3xl font-semibold">{t('modalTitle')}</h2>
          </div>

          {/* Modal Description */}
          <p className="text-sm text-gray-700 text-xl mb-6">{t('modalText')}</p>

          <div className="flex flex-col justify-between h-[60%]">
            {/* Contact Info */}
            <div className="">
              <div className="flex items-center gap-2 text-lg text-gray-700">
                <TiLocation size={30} />
                <p>Deventer, NL</p>
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-700 mt-2">
                <MdContactPhone size={30} />
                <p>{t('callText')}: +31 6 14946511</p>
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-700 mt-2">
                <IoMdMail size={30} />
                <p>support@visioncore.com.tr</p>
              </div>
            </div>

            {/* Social Media */}

            <div className="flex gap-5 text-gray-700 text-3xl">
              <Link to="https://www.linkedin.com/company/visioncore" className='cursor-pointer transform transition-transform duration-200 hover:scale-110'><FaLinkedin /></Link>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-1/2 p-6 border-l">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-black text-sm font-medium">{t('fullName')}</span>
                <input
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                )}
              </label>
              <label className="block">
                <span className="text-black text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                )}
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-black text-sm font-medium">{t('phoneNumber')}</span>
                <input
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                )}
              </label>
              <label className="block">
                <span className="text-black text-sm font-medium">{t('messageTopic')}</span>
                <select
                  name="messageTopic"
                  value={formik.values.messageTopic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="" disabled>
                    {t('selectTopic')}
                  </option>
                  <option value="topic1">{t('topic1')}</option>
                  <option value="topic2">{t('topic2')}</option>
                  <option value="topic3">{t('topic3')}</option>
                </select>
                {formik.touched.messageTopic && formik.errors.messageTopic && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.messageTopic}</div>
                )}
              </label>
            </div>
            <label className="block">
              <span className="text-black text-sm font-medium">{t('message')}</span>
              <textarea
                name="message"
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              )}
            </label>
            <label className="block">
              <span className="text-black text-sm font-medium">Upload File</span>
              <input
                type="file"
                name="file"
                onChange={(event) => {
                  const files = event.currentTarget.files;
                  if (files && files[0]) {
                    formik.setFieldValue("file", files[0]);
                  }
                }}
                onBlur={formik.handleBlur}
                className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {formik.touched.file && formik.errors.file && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.file}</div>
              )}
            </label>
            <div className="flex items-center gap-5 space-x-4 mt-4">
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={handleRecaptchaChange}
                className="flex-shrink-0"
              />
              <button
                type="submit"
                disabled={!recaptchaValue}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
              >
                {t('submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default ContactModal;