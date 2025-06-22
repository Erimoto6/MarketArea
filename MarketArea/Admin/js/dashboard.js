// Dashboard JavaScript Functions

// Global state
let notificationPopupOpen = false;
let profileDropdownOpen = false;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    updateStats();
    loadRecentActivity();
});

// Dashboard initialization
function initializeDashboard() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.notification-btn') && !event.target.closest('.notification-popup')) {
            closeNotifications();
        }
        if (!event.target.closest('.profile-dropdown')) {
            closeProfileDropdown();
        }
    });
}

// Notification functions
function toggleNotifications() {
    const popup = document.getElementById('notificationPopup');
    if (notificationPopupOpen) {
        closeNotifications();
    } else {
        popup.style.display = 'flex';
        notificationPopupOpen = true;
        closeProfileDropdown();
        setTimeout(() => {
            updateNotificationBadge(0);
        }, 1000);
    }
}

// Profile dropdown functions
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (profileDropdownOpen) {
        closeProfileDropdown();
    } else {
        dropdown.classList.add('show');
        dropdown.style.display = 'block';
        profileDropdownOpen = true;
        closeNotifications();
    }
}

// Navigation functions
function goToComplaints(filter = '') {
    let url = 'manage-complaints.html';
    if (filter) {
        url += `?filter=${filter}`;
    }
    window.location.href = url;
}

function viewComplaint(complaintId) {
    alert(`Opening details for complaint ${complaintId}\n\nThis would normally open a detailed complaint view with full information, history, and action options.`);
}

// Update dashboard statistics
function updateStats() {
    const stats = {
        total: 4,
        ongoing: 2,
        complete: 1,
        abandon: 1
    };

    document.getElementById('totalComplaintsCount').textContent = stats.total;
    document.getElementById('ongoingCount').textContent = stats.ongoing;
    document.getElementById('resolvedCount').textContent = stats.complete;
    document.getElementById('abandonCount').textContent = stats.abandon;
}

// Auto-refresh data every 30 seconds
setInterval(() => {
    updateStats();
    loadRecentActivity();
}, 30000);