// Define an interface for MajorCredits with properties for credits and brand
interface MajorCredits {
    credits: number; // Number of credits
    brand: 'brandA'; // Brand identifier, specifically 'brandA'
}

// Define an interface for MinorCredits with properties for credits and brand
interface MinorCredits {
    credits: number; // Number of credits
    brand: 'brandB'; // Brand identifier, specifically 'brandB'
}

// Function to sum the credits of two major subjects
function sumMajorCredits(subject1: number, subject2: number): number {
    return subject1 + subject2; // Return the sum of the two subjects' credits
}

// Function to sum the credits of two minor subjects
function sumMinorCredits(subject1: number, subject2: number): number {
    return subject1 + subject2; // Return the sum of the two subjects' credits
}
