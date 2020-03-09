export const Employee = (employee) => {
    return `
        <section class="employeeinfo">
            <div>ID: ${employee.id}</div>
            <div>${employee.firstName} ${employee.lastName}</div>
            <div>Hours Scheduled: ${employee.hoursScheduled}</div>
        </section>
        `
    }