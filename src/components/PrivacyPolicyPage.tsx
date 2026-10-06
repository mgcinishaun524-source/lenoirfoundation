import React from 'react';
import { siteContactEmail } from '../lib/security';

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information we collect',
    paragraphs: [
      'We collect personal information that you choose to send through the website. This may include your name, email address, the subject of your enquiry and the message you write. If you submit the newsletter form, we receive the email address you provide.',
      'When you visit the website, your hosting provider and external services used to deliver website content may also process technical information such as your IP address, browser and device information, and the pages or resources your browser requests.',
      'Please do not use a general website form to send sensitive information or personal information about a child.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '2. How we use your information',
    paragraphs: [
      'We use enquiry details to read and respond to your message. We use newsletter email addresses to process your request to receive updates. We may also use information where reasonably necessary to protect the website, address misuse, or meet a legal obligation.',
      'The donation form currently shown on the website is a demonstration: it is not connected to a payment provider, does not take a payment, and does not send the entered donor details to us.',
    ],
  },
  {
    id: 'lawful-basis',
    title: '3. Why we may process your information',
    paragraphs: [
      'Where UK data protection law applies, the lawful basis depends on the purpose. We may rely on our legitimate interests in receiving and responding to enquiries and operating a secure website; your consent where you choose to receive newsletter updates; or a legal obligation where applicable. You can withdraw consent to newsletter updates at any time by contacting us.',
    ],
  },
  {
    id: 'sharing-information',
    title: '4. Who may receive your information',
    paragraphs: [
      'Contact form and newsletter submissions are sent to FormSubmit, which processes them so they can be delivered to the Foundation. The website also loads or embeds services such as Google Fonts, Unsplash images and OpenStreetMap maps. Those providers may receive technical information from your browser when their content is requested.',
      'We do not use this website to sell your personal information. We may disclose information if required by law or where necessary to protect our rights, users or services. Third-party providers handle information under their own terms and privacy notices.',
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies and similar technologies',
    paragraphs: [
      'The website application does not currently set its own analytics or advertising cookies. Your browser may make requests to external content or hosting providers, and those providers may use their own cookies or similar technologies under their policies. You can manage cookies using your browser settings.',
    ],
  },
  {
    id: 'international-transfers',
    title: '6. International processing',
    paragraphs: [
      'The Foundation and its website service providers may process information in countries outside the United Kingdom. Where applicable, providers are responsible for describing the safeguards they use for international transfers in their own privacy information. Contact us if you would like more information about a particular transfer.',
    ],
  },
  {
    id: 'retention',
    title: '7. How long we keep information',
    paragraphs: [
      'We keep enquiry and newsletter information only for as long as reasonably needed for the purpose it was collected, to manage our relationship with you, and to meet applicable legal requirements. FormSubmit may separately retain submissions under its own retention practices. You can ask us to stop sending newsletter updates at any time.',
    ],
  },
  {
    id: 'children',
    title: '8. Children’s information',
    paragraphs: [
      'The Foundation’s programmes may support children, but the website contact and newsletter forms are not intended for children to submit their personal information. A parent, guardian or other responsible adult should contact us on a child’s behalf. If you believe a child has sent us personal information through the website, please contact us so we can review the request.',
    ],
  },
  {
    id: 'your-rights',
    title: '9. Your privacy rights',
    paragraphs: [
      'Depending on the circumstances, UK data protection law may give you the right to request access to your personal information, ask us to correct or erase it, restrict or object to certain processing, or request a copy in a portable format. Where processing is based on consent, you may withdraw that consent. These rights are subject to legal conditions and exemptions.',
      'To exercise a right, contact us using the details below. You also have the right to raise a concern with the UK Information Commissioner’s Office (ICO) at ico.org.uk.',
    ],
  },
  {
    id: 'updates',
    title: '10. Updates to this notice',
    paragraphs: [
      'We may update this Privacy Notice when our website, practices or legal requirements change. The “Last updated” date at the top of this page shows when it was most recently revised. Please check this page periodically.',
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
            Privacy Notice
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Last updated October 6, 2026
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            This notice explains how LeNoir Foundation may collect, use and share personal information when you visit our website or contact us.
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-4 text-xl font-extrabold text-[#112335]">Contents</h2>
          <ol className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-[#f15a24] hover:underline">
                  {title}
                </a>
              </li>
            ))}
            <li><a href="#contact-us" className="hover:text-[#f15a24] hover:underline">Contact us</a></li>
          </ol>
        </section>

        <div className="space-y-8">
          {sections.map(({ id, title, paragraphs }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-extrabold text-[#112335]">{title}</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <section id="contact-us" className="mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-extrabold text-[#112335]">11. Contact us</h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            For privacy questions or requests, contact LeNoir Foundation at 86-90 Paul Street, London, EC2A 4NE, United Kingdom.
          </p>
          <a
            href={`mailto:${siteContactEmail}`}
            className="mt-2 inline-block font-semibold text-[#f15a24] underline underline-offset-4"
          >
            {siteContactEmail}
          </a>
        </section>

        <p className="mt-8 text-xs leading-6 text-slate-500">
          This notice should be checked against the Foundation’s actual provider arrangements, data retention practices and legal obligations. It is general information, not legal advice.
        </p>
      </div>
    </article>
  );
}
