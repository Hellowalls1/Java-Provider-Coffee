export const Employee = (employee) => {
    return `
        <section class="employeeinfo">
            <div class="id">ID: ${employee.id}</div>
            <div class="firstName">${employee.firstName}</div>
            <div class="lastName">${employee.lastName}</div>
            <div class="hours">Hours Scheduled: ${employee.hoursScheduled}</div>
        </section>
        `
    }