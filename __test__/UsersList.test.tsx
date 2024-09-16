import { render, screen } from "@testing-library/react";
import UsersList from "@/app/(admin)/admin/users/page";
import { useUsersContext } from "../app/_providers/context-providers";
import UserDetailsPage from "@/app/(admin)/admin/users/[id]/page";

// Mock the useUsersContext hook
jest.mock("../app/_providers/context-providers", () => ({
  useUsersContext: jest.fn(),
}));

describe("UsersList", () => {
  it("should show loading state when data is loading", () => {
    // Arrange: mock loading state
    (useUsersContext as jest.Mock).mockReturnValue({
      users: undefined,
      isLoading: true,
    });

    // Act: render component
    render(<UserDetailsPage />);

    // Assert: check for a loading indicator
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display user details when data is loaded", () => {
    // Arrange: mock loaded user data
    const user1 = { personalInformation: { status: "Active" } };
    const user2 = { personalInformation: { status: "Inactive" } };
    (useUsersContext as jest.Mock).mockReturnValue({
      users: {
        data: {
          data: [user1, user2],
        },
      },
      isLoading: false,
    });

    // Act: render component
    render(<UsersList />);

    // Assert: check if users are displayed and table headers are rendered
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Loans/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Savings/i)).toBeInTheDocument();

    // Check if user data is displayed correctly (adjust selectors as needed)
    expect(screen.getByText(user1.personalInformation.status)).toBeInTheDocument();
    expect(screen.getByText(user2.personalInformation.status)).toBeInTheDocument();
  });

  it("should show message when no users are available", () => {
    // Arrange: mock empty user data
    (useUsersContext as jest.Mock).mockReturnValue({
      users: { data: { data: [] } },
      isLoading: false,
    });

    // Act: render component
    render(<UsersList />);

    // Assert: check if it displays empty state or message
    expect(screen.getByText(/No users available/i)).toBeInTheDocument();
  });
});