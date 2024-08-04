# Welcome to your GPT Engineer project

## Project info

**Project**: rentalformulator 

**URL**: https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve

**Description**: You are tasked with generating a comprehensive rental property application form based on an applicant's profile and the details of a specific rental property. This form should be suitable for any rental property, regardless of the listing source.

First, you will be provided with the applicant's profile information:

<applicant_profile>
{{APPLICANT_PROFILE}}
</applicant_profile>

Next, you will receive details about the specific rental property:

<rental_property_details>
{{RENTAL_PROPERTY_DETAILS}}
</rental_property_details>

Your task is to create a detailed rental application form that combines the applicant's profile information with the specific requirements of the rental property. Follow these guidelines:

1. Start with a header that includes the property address and the applicant's name.

2. Include all relevant information from the applicant's profile, such as:
   - Full name
   - Contact information (phone, email, current address)
   - Employment details
   - Income information
   - Rental history
   - References

3. Add any additional fields required by the specific rental property, which may include:
   - Desired move-in date
   - Lease term preferences
   - Pet information (if applicable)
   - Vehicle information (if parking is provided)
   - Additional occupants (if any)

4. Include a section for the applicant to disclose any relevant information not covered in their profile, such as:
   - Criminal history
   - Eviction history
   - Bankruptcy filings
   - Special accommodations needed

5. Add a section for the applicant to provide consent for background and credit checks.

6. Include a signature line and date for the applicant to certify the accuracy of the information provided.

7. Format the application in a clear, organized manner with appropriate sections and subsections.

8. Use a professional tone throughout the application.

9. Ensure that all necessary legal disclaimers are included, such as fair housing statements and privacy notices.
 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/rentalformulator.git
cd rentalformulator
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)