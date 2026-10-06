import React from 'react';
import { siteContactEmail } from '../lib/security';

const sections = [
  {
    title: 'Information you provide',
    paragraphs: [
      'If you contact us through a website contact form, we receive the name, email address and message you submit. If you use the newsletter form, you can provide your email address to request updates.',
      'Please do not include sensitive personal information, or personal information about a child, in a general website enquiry.',
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use enquiry details to respond to your request and newsletter email addresses to send the updates you requested. We do not describe the newsletter form as a donation or programme-registration service.',
      'The donation page currently does not connect to a payment provider. Its form is a demonstration and does not complete a donation or send the entered donor details to LeNoir Foundation. Please contact us before making a donation.',
    ],
  },
  {
    title: 'Form providers and other services',
    paragraphs: [
      'Website enquiries and newsletter submissions are sent to FormSubmit so they can be delivered to the Foundation at its configured contact address. FormSubmit may process and retain submissions under its own privacy terms. Please review the provider’s current privacy information before submitting personal information.',
      'The website also loads some content or services from other providers, including Google Fonts, Unsplash images and an OpenStreetMap map. When your browser requests that content, the provider may receive technical information such as your IP address. Please refer to the providers’ privacy information for details of their processing.',
    ],
  },
  {
    title: 'Cookies, storage and security',
    paragraphs: [
      'The website does not currently use its own analytics or advertising cookies, and the application code does not intentionally save form entries in browser storage. Embedded or external providers may use their own technologies when their content is loaded.',
      'We take reasonable steps to protect information, but sending information over the internet cannot be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'Retention and your rights',
    paragraphs: [
      'We keep personal information only for as long as it is needed to respond to an enquiry, provide requested updates, and meet applicable legal or record-keeping requirements. You can ask us to stop sending newsletter updates at any time.',
      'Depending on the circumstances, UK data protection law may give you rights to access, correct, erase or restrict the use of your personal information, to object to certain processing, and to complain to the Information Commissioner’s Office (ICO). Contact us first if you have a question or request.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-[#faf8f5] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f15a24]">
            LeNoir Foundation
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#112335] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            This notice explains what information may be handled when you visit this website, contact us or request newsletter updates.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map(({ title, paragraphs }) => (
            <section key={title}>
              <h2 className="mb-3 text-xl font-extrabold text-[#112335]">{title}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-extrabold text-[#112335]">Contact us</h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            LeNoir Foundation, 86-90 Paul Street, London, EC2A 4NE, United Kingdom.
          </p>
          <a
            href={`mailto:${siteContactEmail}`}
            className="mt-2 inline-block font-semibold text-[#f15a24] underline underline-offset-4"
          >
            {siteContactEmail}
          </a>
        </section>

        <p className="mt-8 text-xs leading-6 text-slate-500">
          This website notice is general information, not legal advice. The Foundation should review it against its actual data handling, provider arrangements and retention practices before relying on it as its formal privacy notice.
        </p>
      </div>
    </article>
  );
}
