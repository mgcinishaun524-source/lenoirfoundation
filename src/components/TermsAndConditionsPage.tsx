import React from 'react';
import { siteContactEmail } from '../lib/security';

const sections = [
  {
    title: 'Using this website',
    paragraphs: [
      'You may use this website for lawful purposes and in a way that does not interfere with its operation or prevent others from using it. Do not attempt to gain unauthorised access to the website or its systems.',
      'We may update, suspend or remove website content or features at any time. We do not guarantee that the website will always be available or free from errors.',
    ],
  },
  {
    title: 'Information on this website',
    paragraphs: [
      'The website provides general information about LeNoir Foundation, its work and ways to get in touch. We aim to keep information accurate and current, but it may change and is not a substitute for advice tailored to your circumstances.',
      'Photographs, statistics, programme details and other material are provided for general information. Contact us to confirm current programme availability or arrangements.',
    ],
  },
  {
    title: 'Donations',
    paragraphs: [
      'The donation form currently displayed on this website is a demonstration only. It is not connected to a payment provider and does not take or process payments. A confirmation shown by that form is not a payment confirmation or donation receipt. Please contact the Foundation directly to discuss making a donation.',
    ],
  },
  {
    title: 'Intellectual property and links',
    paragraphs: [
      'Unless otherwise stated, website text, branding and other materials belong to LeNoir Foundation or are used with permission. You may view and share links to public pages for personal, non-commercial purposes, but must not misrepresent the Foundation or reproduce its materials commercially without permission.',
      'This website may link to third-party websites or display third-party content. We do not control those services and are not responsible for their content, availability or privacy practices.',
    ],
  },
  {
    title: 'Enquiries and liability',
    paragraphs: [
      'Submitting a contact or newsletter form does not create a service agreement, partnership or obligation to provide a programme place. Do not use the website to send confidential or urgent information.',
      'Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for death or personal injury caused by negligence, fraud, or your statutory rights. To the extent permitted by law, the website and its content are provided without a guarantee that they will be uninterrupted or suitable for a particular purpose.',
    ],
  },
  {
    title: 'Changes and governing law',
    paragraphs: [
      'We may revise these terms by updating this page. Your continued use of the website after a change means you use it under the updated terms.',
      'These terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction, subject to any mandatory rights you have under applicable law.',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <article className="bg-[#faf8f5] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f15a24]">
            LeNoir Foundation
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#112335] sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            These terms apply to your use of the LeNoir Foundation website.
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
          These website terms are general information, not legal advice. The Foundation should have them reviewed before publication as its formal terms.
        </p>
      </div>
    </article>
  );
}
